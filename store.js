import { action, observable, computed, runInAction, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
import React from 'react'
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Emojify from 'react-emojione';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';

//const axios = require('axios');

let Crypto = require('crypto-js')

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

let store


const DAY_MILSEC = 24 * 60 * 60 * 1000;

const Context = React.createContext()

export default Context


class Store {
  constructor() {
    makeObservable(this)
  }

  // // Global Data and Functions
  // URL-adress server
  //@observable url = 'https://2371b07ef0f9.ngrok.io'
  @observable url = 'https://qwert45hi.pythonanywhere.com'

  // // App&User Data and Functions

  // "/login" (Вход)
  @observable loginValues = {
    email: '',
    password: '',
    passwordHash: '',
  }

  @action setLoginValues = (name, value) => {
    this.loginValues[name] = value
  }

  @action setLoginValuesClear = () => {
    this.loginValues.email = ''
    this.loginValues.password = ''
    this.loginValues.passwordHash = ''
  }

  @action goToHexLogin = () => {
    this.loginValues.passwordHash = Crypto.SHA384(this.loginValues.password).toString()
  }

  // "/registarion"

  @observable registrationValues = {
    jwt: '',
    email: '',
    emailHash: '',
    password: '',
    passwordHash: '',
    username: '',
    emailReset: '',
    passwordReset: '',
  }

  @action setRegistrationValues = (name, value) => {
    this.registrationValues[name] = value
  }

  @action setRegistrationValuesClear = () => {
    this.registrationValues.email = ''
    this.registrationValues.password = ''
    this.registrationValues.username = ''

  }

  @action goToHex = () => {
    this.registrationValues.passwordHash = Crypto.SHA384(this.registrationValues.password).toString()
    this.registrationValues.emailHash = this.registrationValues.email
  }

  // "/app/settinds"

  @observable settings = {
    avatar: '',
    username: '',
    role: 0,
    firstName: '',
    secondName: '',
    patronymic: '',
    email: '',
    emailConfirmed: false,
    emailBefore: '',
    emailBeforeHidden: '',
    emailAfter: '',
    password: '',
    darkTheme: true,
    language: '',
    passwordEmailChange: '',
    newEmailChange: '',
    passwordOldChange: '',
    passwordNewChange: '',
    passwordOldChangeHex: '',
    passwordNewChangeHex: '',
  }

  @action setSettingsValues = (name, value) => {
    this.settings[name] = value
  }


  @observable settingsNew = {
    avatar: '',
    username: '',
    role: 0,
    firstName: '',
    secondName: '',
    patronymic: '',
    email: '',
    emailConfirmed: false,
    emailBefore: '',
    emailBeforeHidden: '',
    emailAfter: '',
    password: '',
    darkTheme: true,
    language: '',
    passwordEmailChange: '',
    newEmailChange: '',
    passwordOldChange: '',
    passwordNewChange: '',
    passwordOldChangeHex: '',
    passwordNewChangeHex: '',
  }

  @action setSettingsNewValues = (name, value) => {
    this.settingsNew[name] = value
  }

  @action goToHexPasswordChange = () => {
    this.settingsNew.passwordOldChangeHex = Crypto.SHA384(this.settingsNew.passwordOldChange).toString()
    this.settingsNew.passwordNewChangeHex = Crypto.SHA384(this.settingsNew.passwordNewChange).toString()

  }

  @action setSettingsEmailValues = () => {
    let emailArr = this.settingsNew.email.split("@", 2)
    this.settingsNew.emailBefore = emailArr[0]
    this.settingsNew.emailAfter = "@" + emailArr[1]
    this.settings.emailBefore = emailArr[0]
    this.settings.emailAfter = "@" + emailArr[1]

  }

  labelSettings = ["username", "darkTheme"]
  labelServerSettings = ["username", "dark-theme"]
  update = {
    "changed": {}
  }

  // // UI Data and Functions
  // "/" (main page) 
  @observable alertData = {
    type: 0,
    text: ''
  }

  @action setAlertData = (type, text) => {
    this.alertData.type = type
    this.alertData.text = text
  }

  // "/login.js" (Вход)
  @observable loginValuesUI = {
    fetchRequestReady: false,
    loginSuccess: false,
    showPassword: false,
    error: false,
    errorEmail: false,
    errorPassword: false,
    errorServer: false,
    emailAlreadyUsed: false,
  }

  @action setLoginValuesUI = (name, value) => {
    this.loginValuesUI[name] = value
  }

  @action setLoginValuesFalse = () => {
    this.loginValuesUI.error = false
    this.loginValuesUI.errorEmail = false
    this.loginValuesUI.errorPassword = false
    this.loginValuesUI.errorServer = false

  }

  // "/registarion"

  @observable registrationValuesUI = {
    isCheckedEmail: false,
    showPassword: false,
    error: false,
    errorEmail: false,
    emailAlreadyUsed: false,
    errorPasswordLength: false,
    errorSymbols: false,
    isFirstName: false,
    errorSymFirstName: false,
    isSecondName: false,
    errorSymSecondName: false,
    isNickName: false,
    errorUsername: false,
    errorSymNickName: false,
    errorEmailReset: false,
    errorEmailNotFounedReset: false,
    emailResetOk: false,
    emailResetOkay: false,
    errorSymbolsReset: false,
    errorPasswordLengthReset: false,
    errorServer: false,
    errorServerEmail: false,
    errorServerUser: false,
  }

  @action setRegistrationValuesUI = (name, value) => {
    this.registrationValuesUI[name] = value
  }

  @action setUserRegValuesFalse = () => {
    this.registrationValuesUI.isFirstName = false
    this.registrationValuesUI.errorSymFirstName = false
    this.registrationValuesUI.isSecondName = false
    this.registrationValuesUI.errorSymSecondName = false
    this.registrationValuesUI.isNickName = false
    this.registrationValuesUI.errorSymNickName = false
    this.registrationValuesUI.errorEmailReset = false
    this.registrationValuesUI.errorEmailNotFounedReset = false
    this.registrationValuesUI.errorSymbolsReset = false
    this.registrationValuesUI.errorPasswordLengthReset = false



  }

  @action setRegistrationValuesFalse = () => {
    this.registrationValuesUI.errorEmail = false
    this.registrationValuesUI.errorPasswordLength = false
    this.registrationValuesUI.errorSymbols = false
    this.registrationValuesUI.emailAlreadyUsed = false
    this.registrationValuesUI.errorServer = false
    this.registrationValuesUI.errorServerEmail = false
    this.registrationValuesUI.errorServerUser = false
    this.registrationValuesUI.errorUsername = false
  }


  // "/email/<id>"
  @observable emailCheck = {
    serverAnswer: false,
  }

  @action setEmailCheckValues = (name, value) => {
    this.emailCheck[name] = value
  }

  // "/app/" (main app page)
  // isFetchLoading

  @observable isFetchLoading = {
    settings: false,
    main: false,

  }

  @action setIsFetchLoading = (name, value) => {
    this.isFetchLoading[name] = value
  }

  // Education social UI (UI example)
  @observable todoList = [
    { key: 0, time: '10:30', task: 'Математика', info: 'Курс', done: false },
    { key: 1, time: '12:30', task: 'Робототехника', info: 'Кружок', done: false },
    { key: 2, time: '14:20', task: 'Время покушать!', info: 'Приятного аппетита :)', done: false },
    { key: 3, time: '15:40', task: 'История', info: 'Школьный урок', done: false },
    { key: 4, time: '21:30', task: 'Веб Дизайн', info: 'Кружок', done: false },
  ]

  @observable lastActiveList = [
    { key: 0, time: '08:10', label: 'Физика. Общий школьный курс' },
    { key: 1, time: '12:30', label: 'Кружок по Олимпиадной Биологии' },
    { key: 2, time: '14:00', label: 'Коворкинг в Сообществе \"Кефир\" ' },
    { key: 3, time: '17:30', label: 'Спортивная секция. Волейбол' },
    { key: 4, time: '19:50', label: 'Кружок Информатики' },
    { key: 5, time: '22:30', label: 'Трансляция лекции по дисциплине Цифровая культура' },
  ]

  @observable NoteList = [
    { key: 0, time: '09:30', label: 'Вы получили 2 по предмету Физика' },
    { key: 1, time: '11:40', label: 'На завтра нужно сделать ЭССЕ по предмету История' },
    { key: 2, time: '13:30', label: 'Сегодня в столовой блины!' },
    { key: 3, time: '15:10', label: 'Не забываем о концерте к 1 Мая © Алёна Алексеевна' },
    { key: 4, time: '16:20', label: 'Кружок Информатики ведёт набор!' },
    { key: 5, time: '20:80', label: ' Котики, пора дочитать Войну и Мир. - Ваша ЛН' },
  ]

  @action setIsIcon = (key) => {

    this.todoList[key].done = !this.todoList[key].done
    //console.log(this.todoList[key].done)
  }

  @observable dataTimeTable = [
    { time: "9:00", lesson: "Математика", now: true, },
    { time: "9:55", lesson: "География", now: true, },
    { time: "11:00", lesson: "Русский язык", now: true, },
    { time: "12:05", lesson: "Немецкий язык", now: true, },
    { time: "13:00", lesson: "Биология", now: true, },
  ]

  @observable learningCenterValues = {
    openExpandMore: false,

  }

  @action clickedExpandMoreIcon = () => {
    this.learningCenterValues.openExpandMore = !this.learningCenterValues.openExpandMore
  }

  //  "/app/education" (Education Page)
  // Courses loading 
  // @observable courseList = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' },]

  // @action setCourseList = (data) => {
  //   this.courseList = data
  // }

  // newCourseLoading 

  @observable isLoadingNewCourses = false

  @action setIsLoading = (value) => {
    this.isLoadingNewCourses = value
  }

  @observable allLoading = false


  @action setAllLoading = (value) => {
    this.allLoading = value
  }
  // Filters for courses
  @observable chipsGlobalList = [
    { key: 0, title: "Избранное", clicked: false, name: "starred" },
    { key: 1, title: "Закреплённое", clicked: false, name: "pinned" },
    { key: 2, title: "Собственное", clicked: false, name: "owned" },
    { key: 3, title: "Начатое", clicked: false, name: "started" },
  ]

  @action setFiltersGlobal = (data) => {
    //console.log("IndexOF:", data.indexOf("starred"))
    if (data.indexOf("starred") !== -1) {
      this.chipsGlobalList[0].clicked = true
    }
    if (data.indexOf("pinned") !== -1) {
      this.chipsGlobalList[1].clicked = true
    }
    if (data.indexOf("owned") !== -1) {
      this.chipsGlobalList[2].clicked = true
    }
    if (data.indexOf("started") !== -1) {
      this.chipsGlobalList[3].clicked = true
    }
  }

  @observable chipsCategoryList = [
    { key: 0, title: "Средняя школа", clicked: false, name: "middle-school" },
    { key: 1, title: "Основная школа", clicked: false, name: "main-school" },
    { key: 2, title: "Высшая школа", clicked: false, name: "high-school" },
    { key: 3, title: "Высшее образование", clicked: false, name: "university" },
    { key: 4, title: "Кружки", clicked: false, name: "clubs" },
    { key: 5, title: "Хобби", clicked: false, name: "hobby" },
    { key: 6, title: "ОГЭ", clicked: false, name: "bne" },
    { key: 7, title: "ЕГЭ", clicked: false, name: "une" },
    { key: 8, title: "Профессиональные навыки", clicked: false, name: "prof-skills" },

  ]

  @observable chipsThemeList = [
    { key: 0, title: "Математика", clicked: false, name: "math" },
    { key: 1, title: "Алгебра", clicked: false, name: "algebra" },
    { key: 2, title: "Геометрия", clicked: false, name: "geometry" },
    { key: 3, title: "Языки", clicked: false, name: "languages" },
    { key: 4, title: "Физика", clicked: false, name: "physics" },
    { key: 5, title: "Химия", clicked: false, name: "chemistry" },
    { key: 6, title: "Биология", clicked: false, name: "biology" },
    { key: 7, title: "География", clicked: false, name: "geography" },
    { key: 8, title: "История", clicked: false, name: "history" },
    { key: 9, title: "Обществознание", clicked: false, name: "social-science" },
    { key: 10, title: "Искусства", clicked: false, name: "arts" },
    { key: 11, title: "Информатика", clicked: false, name: "informatics" },
    { key: 12, title: "Литература", clicked: false, name: "literature" },
    { key: 13, title: "Философия", clicked: false, name: "philosophy" },
  ]

  @observable chipsDifficultyList = [
    { key: 0, title: "Обзорный", clicked: false, name: "review" },
    { key: 1, title: "Новичок", clicked: false, name: "newbie" },
    { key: 2, title: "Любитель", clicked: false, name: "amateur" },
    { key: 3, title: "Энтузиаст", clicked: false, name: "enthusiast" },
    { key: 4, title: "Профи", clicked: false, name: "professional" },
    { key: 5, title: "Эксперт", clicked: false, name: "expert" },

  ]

  @observable chipsSortList = [
    { key: 0, title: "По популярности", clicked: true, name: "popularity" },
    { key: 1, title: "По дате посещения: сначала недавние", clicked: false, name: "visit-date" },
    { key: 2, title: "По дате создания: сначала новые", clicked: false, name: "creation-date" },
  ]



  @action chipperClickOneSort = (key) => {
    this.coursesFilters.counter = 0
    if (!this.chipsSortList[key].clicked) {
      for (let i = 0; i < this.chipsSortList.length; i++) {
        this.chipsSortList[i].clicked = false
      }
      this.chipsSortList[key].clicked = true
    } else {
      this.chipsSortList[key].clicked = false
    }
  }


  @action chipperClickOne = (key) => {
    this.coursesFilters.counter = 0
    if (!this.chipsGlobalList[key].clicked) {
      for (let i = 0; i < this.chipsGlobalList.length; i++) {
        this.chipsGlobalList[i].clicked = false
      }
      this.chipsGlobalList[key].clicked = true
    } else {
      this.chipsGlobalList[key].clicked = false
    }
  }

  @action chipperClickAny = (name, key) => {
    this.coursesFilters.counter = 0
    //console.log(this[name][key])
    //console.log(this[name][key].clicked)
    this[name][key].clicked = !this[name][key].clicked
    //console.log(this[name][key].clicked)
  }




  @observable counterCourses = 0

  @action counterZero = () => {
    this.counterCourses = 0
  }

  @action counterUp = () => {
    this.counterCourses = this.counterCourses + 1
    //console.log("counter", this.counterCourses)
  }

  @observable coursesFilters = {
    "filters": {
      "global": [],
      "difficulty": [],
      "category": [],
      "theme": [],
    },
    "sort": "popularity",
    "search": "",
    "counter": 0,
  }

  @action setSearchValue = (value) => {
    this.coursesFilters["search"] = value
    console.log(this.coursesFilters["search"])
  }

  @action collectFilters = () => {
    console.log("Collect")
    let search = this.coursesFilters["search"]
    this.coursesFilters = {
      "filters": {
        "global": [],
        "difficulty": [],
        "category": [],
        "theme": [],
      },
      "sort": "popularity",
      "search": "",
      "counter": 0,
    }
    for (let i = 0; i < 4; i++) {
      if (this.chipsGlobalList[i].clicked) this.coursesFilters["filters"]["global"].push(this.chipsGlobalList[i].name)
    }
    for (let i = 0; i < 9; i++) {
      //console.log("loop")
      //console.log(this.chipsCategoryList[i].clicked)
      if (this.chipsCategoryList[i].clicked) {
        this.coursesFilters["filters"]["category"].push(this.chipsCategoryList[i].name)
        //console.log("YESQ")
      }
    }
    for (let i = 0; i < 14; i++) {
      this.chipsThemeList[i].clicked && this.coursesFilters.filters.theme.push(this.chipsThemeList[i].name)
    }
    for (let i = 0; i < 6; i++) {
      this.chipsDifficultyList[i].clicked && this.coursesFilters.filters.difficulty.push(this.chipsDifficultyList[i].name)
    }
    for (let i = 0; i < 3; i++) {
      if (this.chipsSortList[i].clicked) {
        this.coursesFilters.sort = this.chipsSortList[i].name
        break
      }
    }
    this.coursesFilters.counter = this.counterCourses
    this.coursesFilters["search"] = search
    console.log("coursesFilters:", this.coursesFilters)

  }

  @observable coursesList = [

  ]

  @action loadingMoreCourses = () => {
    console.log("loading new courses")
    this.setIsLoading(true)
    this.collectFilters()
    let filters = this.coursesFilters
    this.postDataScr(`${this.url}/courses/`, filters)
      .then((data) => {
        //console.log("courses:", data)
        if (data != undefined) {
          if (data.length < 12) {
            this.setAllLoading(true)
          }
          //console.log(data.length)
          this.setIsLoading(false)
          this.addItemsCoursesList(data)
        }
      });
  }

  @action clearCoursesList = (data) => {
    this.coursesList = [

    ]
  }

  @action storeClickedMoreVertIcon = (id, value, event) => {
    this.coursesList.find(course => course["id"] === id)["openMenu"] = value
    this.coursesList.find(course => course["id"] === id)["openMenuTarget"] = event
  }

  @action setOneCourseHidden = (id) => {
    console.log("idF", id)
    const index = this.coursesList.findIndex(course => course["id"] === id);
    console.log("index", index)
    if (index !== -1) {
      this.coursesList.splice(index, 1);
    }
    console.log("n1", this.coursesList)
  }

  @action setDataCoursesList = (id, name, value) => {
    //console.log("+", this.coursesList.find(course => course["id"] === id))
    this.coursesList.find(course => course["id"] === id)[name] = value
    //console.log(this.coursesList.find(course => course["id"] === id)[name])
    //console.log("n", this.coursesList)
  }

  @action addItemsCoursesList = (data) => {
    this.coursesList.push(...data)
    console.log("coursesList", this.coursesList)

  }

  // "/app/settings
  @observable settingsUI = {
    hiddenEmail: true,
    showPasswordChangeEmail: false,
    showPasswordOldChange: false,
    showPasswordNewChange: false,
    passwordChangeLengthError: false,
    passwordChangeSymError: false,
    passwordChangeError: false,
    passwordChangeServerError: false,
    emailChangeEmailError: false,
    emailChangePasswordError: false,
    emailChangeSymError: false,


  }

  @action setSettingsUIValues = (name, value) => {
    this.settingsUI[name] = value
  }

  // // Const Data 

  // Список пунктов главного меню
  @observable menulist = [
    {
      name: 'Главная',
      way: '/',
      logo: <HomeIcon />,
    },
    {
      name: 'Образование',
      way: '/education',
      logo: <SchoolIcon />,
    },
    {
      name: 'Новости',
      way: '/news',
      logo: <PublicIcon />,
    },
    {
      name: 'Друзья',
      way: '/friends',
      logo: <MessageIcon />,
    },
    {
      name: 'Сообщества',
      way: '/communities',
      logo: <FireplaceIcon />,
    },
    {
      name: 'Приложения',
      way: '/apps',
      logo: <AppsIcon />,
    }
  ]

  // // Support Data and Functions
  // Fetch API 

  //Чтобы браузеры могли отправлять запрос с учётными данными (даже для cross-origin запросов),
  //добавьте credentials: 'include' в объект init, передаваемый вами в метод fetch():
  //Если вы хотите отправлять запрос с учетными данными только если URL принадлежит одному источнику (origin)
  //что и вызывающий его скрипт, добавьте credentials: 'same-origin'.
  //Напротив, чтобы быть уверенным, что учётные данные не передаются с запросом, используйте credentials: 'omit':

  @action async getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  @action async getData(url) { // mode, cache, credentials, redirect, referrerPolicy
    // Default options are marked with *
    try {
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache, // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect, // manual, *follow, error
        // referrerPolicy, // no-referrer, *client
      });
      //console.log(response.headers)
      const string = await response.text();
      const json = string === "" ? {} : JSON.parse(string);
      return json; // parses JSON response into native JavaScript objects
    } catch (error) {
      //console.log(error)
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
  }

  @action async postData(url, data) { // mode, cache, credentials, redirect, referrerPolicy
    // Default options are marked with *
    try {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache, // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect, // manual, *follow, error
        // referrerPolicy, // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      //console.log(response.headers)
      const string = await response.text();
      const json = string === "" ? {} : JSON.parse(string);
      return json; // parses JSON response into native JavaScript objects
    } catch (error) {
      //console.log(error)
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
  }

  @action async getDataScr(url) { // mode, cache, credentials, redirect, referrerPolicy
    // Default options are marked with *
    try {
      console.log("Печенье:", this.getCookie('csrf_access_token'))
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache, // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': this.getCookie('csrf_access_token'),
        },
        // headers: {
        //   'Content-Type': 'application/json'
        //   //   // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect, // manual, *follow, error
        // referrerPolicy, // no-referrer, *client
      });
      //console.log(response.headers)
      const string = await response.text();
      const json = string === "" ? {} : JSON.parse(string);
      return json; // parses JSON response into native JavaScript objects
    } catch (error) {
      //console.log(error)
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
  }

  @action async postDataScr(url, data) { // mode, cache, credentials, redirect, referrerPolicy
    // Default options are marked with *
    try {
      console.log("Печенье:", this.getCookie('csrf_access_token'))
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        // cache, // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': this.getCookie('csrf_access_token'),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect, // manual, *follow, error
        // referrerPolicy, // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      //console.log(response.headers)
      const string = await response.text();
      const json = string === "" ? {} : JSON.parse(string);
      return json; // parses JSON response into native JavaScript objects
    } catch (error) {
      //console.log(error)
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
  }


  // Вход и глобальные данные приложения //login.js


  // Страница Регистрации //registarion


  @observable userData = {
    isBackgroundImageInMain: false,
    isBackgroundImageInEducation: false,
    isDarkMode: true,
    readyAuth: false,
    officialNamesHidden: false,
    firstName: '',
    secondName: '',
    username: '',
    userRole: 'Участник',
  }

  @action setUserDataValues = (name, value) => {
    this.userData[name] = value
  }

  // Подтверждение почты 




  //    ДАННЫЕ

  //Интерфейс

  @observable dialogMenuItem = 0

  @action setDialogMenuItem = (item) => {
    this.dialogMenuItem = item
  }

  @observable dialogMenu = false

  @action setDialogMenu = () => {
    this.dialogMenu = !this.dialogMenu
  }

  @observable openMenu = false

  @action setOpenMenu = () => {
    this.openMenu = !this.openMenu
  }

  @action setIsDarkMode = () => {
    this.userData.isDarkMode = !this.userData.isDarkMode

  }

  @action setReadyAuth = () => {
    this.userData.readyAuth = !this.userData.readyAuth
  }

  @action setOfficialNamesHidden = () => {
    this.userData.officialNamesHidden = !this.userData.officialNamesHidden
    //console.log(this.userData.officialNamesHidden)
  }

  @observable topLeftMenuButtom = false

  @action setTrueTopLeftMenuButtom = () => {
    this.topLeftMenuButtom = true
  }

  @action setFalseTopLeftMenuButtom = () => {
    this.topLeftMenuButtom = false
  }





}

function initializeStore(initialData = null) {
  const _store = store ?? new Store()

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}















  // @observable dialogsList = [
  //   { key: '1', id: '1', userName: 'Стивен Хокинг', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636659031375892/bigben1.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '2', id: '2', userName: 'Томас Эдисон', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636671639978044/historyEGE.jpeg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '3', id: '3', userName: 'Мария Кюри', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636702974836746/internetculture.jpg?width=1079&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '4', id: '4', userName: 'Луи Пастер', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', createrName: 'Ξ Effect', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636691793215528/historyjpg.jpg?width=1208&height=755", createrAvatar: 'Ξ' },
  //   { key: '5', id: '5', userName: 'Исаак Ньютон', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636716514836500/literature.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '6', id: '6', userName: 'Альберт Эйнштейн', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636732419112970/math.jpg?width=1342&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '7', id: '7', userName: 'Никола Тесла', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636659031375892/bigben1.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '8', id: '8', userName: 'Эдвин Хаббл', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636671639978044/historyEGE.jpeg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '9', id: '9', userName: 'Игорь Букшев', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636702974836746/internetculture.jpg?width=1079&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '10', id: '10', userName: 'Майкл Фарадей', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', createrName: 'Ξ Effect', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636691793215528/historyjpg.jpg?width=1208&height=755", createrAvatar: 'Ξ' },
  //   { key: '11', id: '11', userName: 'Чарльз Дарвин', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636716514836500/literature.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '12', id: '12', userName: 'Галилео Галилей', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636732419112970/math.jpg?width=1342&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  // ]

  // @observable userGroups = [
  //   { label: '11А' },
  //   { label: 'Университет ИТМО' },
  // ]



  // @action hydrate = (data) => {
  //   if (!data) return

  //   this.courseList = data.courseList
  //   console.log(this.courseList)
  // }