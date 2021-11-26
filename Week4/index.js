import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);

    if (serie.isWatched) {
      // Setting the last serie
      if (!this.lastSerie) {
        this.lastSerie = serie;
      } else {
        let lastSerieFinishedDate = this.lastSerie.finishedDate
          .split(".")
          .reverse()
          .join(".");
        let serieFinishedDate = this.lastSerie.finishedDate
          .split(".")
          .reverse()
          .join(".");

        if (lastSerieFinishedDate < serieFinishedDate) this.lastSerie = serie;
      }

      // Updating number of watched
      this.numberOfWatched = this.numberOfWatched + 1;
    } else {
      // now setting next and current serie
      if (serie.isCurrent) this.currentSerie = serie;
      if (!this.nextSerie) this.nextSerie = serie;
    }
    /* update number of unwatched */
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;

    //it should also update the number of series marked as watched / unwatched:
    //"numberOfWatched" and "numberOfUnWatched"
  };

  /* check to see if we have series to process */
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    //Use the .add function to handle adding series, so we keep counts updated.
    series.forEach((serie) => this.add(serie));
  }

  this.finishSerie = function () {
    // generating date
    let date = new Date();
    // getting date in dd.mm.yyyy format
    let changedDateFormat = date
      .toISOString()
      .substring(0, 10)
      .split("-")
      .reverse()
      .join(".");

    /* updating current serie props before we assign to last serie */
    this.currentSerie = {
      ...this.currentSerie,
      isWatched: true,
      isCurrent: false,
      finishedDate: changedDateFormat
    };

    /* time to set new last serie */
    this.lastSerie = this.currentSerie;

    /* now we should update next serie properties before assigning it to currentSerie */
    this.nextSerie.isCurrent = true;

    /* Making our next serie the current serie */
    this.currentSerie = this.nextSerie;

    /* setting our next serie */
    this.series.forEach((serie) => {
      if (
        this.next === this.currentSerie &&
        !serie.isCurrent &&
        !serie.isWatched
      )
        this.nextSerie = serie;
    });

    /* time to update numberOfWatched and numberOfUnWatched again */
    this.numberOfWatched += 1; // this.numberOfWatched = this.numberOfWatched + 1;
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
