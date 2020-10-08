// Javascript & jQuery

// show / hide backdrower

$(document).ready(function () {
  let dailyItem = $(".daily_item");
  let todayItem = $(".today__item");
  let closeBackDrower = $("#close-backdrower");

  todayItem.click(function () {
    weatherWidget.initModalData(null, true);
    $(".wa-backdrower")
      .stop(true, false)
      .animate({
        right: 0
      });
  });

  dailyItem.click(function (e) {
    let index = $(e.currentTarget).attr("data-id");
    weatherWidget.initModalData(index);
    $(".wa-backdrower")
      .stop(true, false)
      .animate({
        right: 0
      });
  });

  closeBackDrower.click(function () {
    $(".wa-backdrower").animate({
      right: -300
    });
  });

  let settings = {
    id: 787657,
    apikey: "03a3f149451cd9db127313c477f966ee",
    units: "metric"
  };

  let weatherWidget = {
    formatTime: function () {
      setInterval(function () {
        $(".left_info__current-time").text(moment().format("HH:mm"));
      }, 1000);
    },

    currentDate: new Date(),
    formatDate: moment().format("dddd, Do MMMM YYYY"),
    currentData: {},
    dailyData: [],
    fetchCurrentDate: function () {
      $.getJSON(
          `http://api.openweathermap.org/data/2.5/weather?id=${
          settings.id
        }&appid=${settings.apikey}&units=${settings.units}`
        )
        .done(function (data) {
          weatherWidget.currentData = data;
          weatherWidget.initCurrentData(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    fetchDailyData: function () {
      $.getJSON(
          `http://api.openweathermap.org/data/2.5/forecast?id=${
          settings.id
        }&appid=${settings.apikey}&units=${settings.units}`
        )
        .done(function (data) {
          weatherWidget.initDailyData(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    initDailyData: function (data) {
      this.currentDate.setHours(15);

      $.each(data.list, function (index, value) {
        let loopDate = new Date(value.dt_txt);
        if (weatherWidget.currentDate.getHours() === loopDate.getHours()) {
          weatherWidget.dailyData.push(value);
        }
      });

      $.each(weatherWidget.dailyData, function (index, singleDay) {
        let nameOfTheDay = moment(singleDay.dt_txt).format("dddd");
        $(`#${index + 1} `).attr("data-id", index);
        $(`#${index + 1} .daily_item__title--name`).text(nameOfTheDay);
        $(`#${index + 1} .daily_item__icon i`)
          .removeClass()
          .addClass(weatherWidget.checkWeatherIcon(singleDay.weather[0].icon));
        $(`#${index + 1} .daily_item__value--temp span`).text(
          parseInt(singleDay.main.temp)
        );
      });

      console.log(weatherWidget.dailyData);
    },

    initModalData: function (index, isCurrent) {
      let data;
      let datum;
      if (isCurrent) {
        data = this.currentData;
        datum = new Date(this.currentData.dt * 1000);
      } else {
        data = this.dailyData[index];
        datum = new Date(data.dt * 1000);
      }

      let nameOfTheDay = moment(datum).format("dddd");
      $(".wa-backdrower .content__title--name").text(nameOfTheDay);
      $(".wa-backdrower .content__icon i")
        .removeClass()
        .addClass(this.checkWeatherIcon(data.weather[0].icon));
      $(".wa-backdrower .content__description--text").text(
        data.weather[0].description
      );
      $(".wa-backdrower .content__value--temp span").text(
        parseInt(data.main.temp)
      );
      $(".wa-backdrower .content__values--min span").text(
        parseInt(data.main.temp_min)
      );
      $(".wa-backdrower .content__values--max span").text(
        parseInt(data.main.temp_max)
      );
      $(".wa-backdrower .content__list--presure span").text(data.main.pressure);

      $(".wa-backdrower .content__list--humidity span").text(
        data.main.humidity
      );
      $(".wa-backdrower .content__list--clouds span").text(data.clouds.all);
      $(".wa-backdrower .content__list--wind span").text(data.wind.speed);
    },

    initCurrentData: function (data) {
      $(".left_info__current-date").text(weatherWidget.formatDate);
      $(".right_info__city-title").text(data.name);
      $(".content__value--temp span").text(data.main.temp);
      $("#current-weather-icon")
        .removeClass()
        .addClass(weatherWidget.checkWeatherIcon(data.weather[0].icon));
    },
    checkWeatherIcon: function (name) {
      switch (name) {
        // ikonice za noc
        case "01n":
          return "wi wi-night-clear";
          break;
        case "02n":
          return "wi wi-night-alt-cloudy";
          break;
        case "03n":
          return "wi wi-cloudy";
          break;
        case "04n":
          return "wi wi-cloudy";
          break;
        case "09n":
          return "wi wi-night-alt-showers";
          break;
        case "10n":
          return "wi wi-night-alt-rain";
          break;
        case "11n":
          return "wi wi-night-alt-thunderstorm";
          break;
        case "13n":
          return "wi wi-night-snow-wind";
          break;
        case "50n":
          return "wi wi-night-fog";
          break;
          // ikonice za dan
        case "01d":
          return "wi wi-day-sunny";
          break;
        case "02d":
          return "wi wi-day-cloudy";
          break;
        case "03d":
          return "wi wi wi-cloudy";
          break;
        case "04d":
          return "wi wi wi-cloudy";
          break;
        case "09d":
          return "wi wi-day-rain-mix";
          break;
        case "10d":
          return "wi wi-day-hail";
          break;
        case "11d":
          return "wi wi-day-sleet-storm";
          break;
        case "13d":
          return "wi wi-day-snow";
          break;
        case "50d":
          return "wi wi-day-fog";
          break;
        default:
          return "wi wi-day-sunny";
      }
    }
  };

  // podesavanja za EasyAutocomplete plugin.
  /* Plugin mozete pronaci na ovoj adresi  http://easyautocomplete.com/download ,
   dok podesavanja i koje opcije postoje mozete pogledati ovde: http://easyautocomplete.com/guide#sec-data-json */
  var autocompleteOptions = {
    // putanja do naseg json fajla, moze biti i negde na nekom serveru, a moze i lokalno kao sto je kod nas slucaj.
    url: 'cities/city-list.json',
    // nacin prikazivanja elemenata kao i njih style
    template: {
      type: "description",
      fields: {
        description: "country"
      }
    },
    placeholder: "Izaberite grad",
    // dodatna podesavanja
    list: {
      match: {
        enabled: true
      },
      // postavljanje maksimalnog broja elemenata u listi
      maxNumberOfElements: 10,
      // kada se izabere neki od gradovaa iz liste pozove ova metoda onChooseEvent , i zatim pisemo logiku koja treba da se izvrsi na taj dogadjaj,
      // nasem slucaju to je pokupljanje vrednosti iz polja ID smestanje istog u option.id objekat, 
      // i pozivanje funkcija koje ponovo ucitavaju informacije sa servera 
      onChooseEvent: function () {
        let cityId = $('#search').getSelectedItemData().id;
        settings.id = cityId;
        weatherWidget.fetchCurrentDate();
        weatherWidget.fetchDailyData();

      }
    },
    // ova funkcija se poziva kada se unese neka vrednost u polje za pretragu, imamo Callback funkciju koji ima povratnu vrednost i vraca sve gradove,
    // preko ispitivanja da li se svojstvo "country" podudara sa nasim "RS" vracamo gradove samo za Srbiju. Odnosno ukoliko se ne podudara vracamo prazan string.
    getValue: function (element) {
      if (element.country == 'RS') {
        return element.name;
      } else {
        return '';
      }
    }
  };
  // ovom funkcijom easyAutocomplete(option) inicijalizujemo nas plugin i vezuje za nase input polje koje treba da predstavlja polje za pretragu
  $("#search").easyAutocomplete(autocompleteOptions);



  weatherWidget.formatTime();
  weatherWidget.fetchCurrentDate();
  weatherWidget.fetchDailyData();

  // console.log(weatherWidget.formatTime);
  // console.log(weatherWidget.formatDate);
});