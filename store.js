import { action, observable, computed, runInAction, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { useMemo } from 'react'
import React from 'react'
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';


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


  @observable userData = {
    isBackgroundImageInMain: false,
    isBackgroundImageInEducation: false,
    isDarkMode: true,
    readyAuth: false,
    name: 'Имя',
    secondName: 'Фамилия',
    nickName: 'Никнейм',
    officialNamesHidden: false,
  }


  @action setIsDarkMode = () => {
    this.userData.isDarkMode = !this.userData.isDarkMode

  }


  @action setReadyAuth = () => {
    this.userData.readyAuth = !this.userData.readyAuth
  }

  @action setOfficialNamesHidden = () => {
    this.userData.officialNamesHidden = !this.userData.officialNamesHidden
  }

  @observable step = 0

  @observable topLeftMenuButtom = false

  @observable daysArrow = [{ day: 0, weekday: '' }, { day: 0, weekday: '' }, { day: 0, weekday: '' }, { day: 0, weekday: '' }, { day: 0, weekday: '' }]

  @action days = () => {
    let today = new Date().getTime();
    let weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    for (let i = 0; i < 5; i++) {
      let date = new Date(today + DAY_MILSEC * i + DAY_MILSEC * this.step);
      this.daysArrow[i].day = date.getDate()
      this.daysArrow[i].weekday = weekdays[date.getDay()]
      // console.log(date.getDate())
      // console.log(this.daysArrow)
    }
    // console.log(today)
    // console.log(this.daysArrow)
    // console.log(this.step)
  }

  @action setTrueTopLeftMenuButtom = () => {
    this.topLeftMenuButtom = true
  }

  @action setFalseTopLeftMenuButtom = () => {
    this.topLeftMenuButtom = false
  }

  @action navigateBeforeIcon = () => {
    if (this.step > 0) {
      this.step -= 1
    }

  }

  @action navigateNextIcon = () => {
    this.step += 1
  }

  // @observable courseList = [
  //   { key: '1', id: '1', nameCourse: 'Английский язык', secondNameCourse: 'Школьный курс', courseAvatar: "/education/bigben1.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '2', id: '2', nameCourse: 'История', secondNameCourse: 'ЕГЭ', courseAvatar: "/education/historyEGE.jpeg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '3', id: '3', nameCourse: 'Цифровая Культура', secondNameCourse: 'Школьный курс', courseAvatar: "/education/internetculture.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '4', id: '4', nameCourse: 'История', secondNameCourse: 'Школьный курс', createrName: 'Ξ Effect', courseAvatar: "/education/historyjpg.jpg", createrAvatar: 'Ξ' },
  //   { key: '5', id: '5', nameCourse: 'Литература', secondNameCourse: 'Школьный курс', courseAvatar: "/education/literature.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  //   { key: '6', id: '6', nameCourse: 'Профильная Математика', secondNameCourse: 'ЕГЭ', courseAvatar: "/education/math.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  // ]

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

  @observable dialogsList = [
    { key: '1', id: '1', userName: 'Стивен Хокинг', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636659031375892/bigben1.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '2', id: '2', userName: 'Томас Эдисон', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636671639978044/historyEGE.jpeg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '3', id: '3', userName: 'Мария Кюри', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636702974836746/internetculture.jpg?width=1079&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '4', id: '4', userName: 'Луи Пастер', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', createrName: 'Ξ Effect', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636691793215528/historyjpg.jpg?width=1208&height=755", createrAvatar: 'Ξ' },
    { key: '5', id: '5', userName: 'Исаак Ньютон', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636716514836500/literature.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '6', id: '6', userName: 'Альберт Эйнштейн', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636732419112970/math.jpg?width=1342&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '7', id: '7', userName: 'Никола Тесла', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636659031375892/bigben1.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '8', id: '8', userName: 'Эдвин Хаббл', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636671639978044/historyEGE.jpeg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '9', id: '9', userName: 'Игорь Букшев', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636702974836746/internetculture.jpg?width=1079&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '10', id: '10', userName: 'Майкл Фарадей', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', createrName: 'Ξ Effect', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636691793215528/historyjpg.jpg?width=1208&height=755", createrAvatar: 'Ξ' },
    { key: '11', id: '11', userName: 'Чарльз Дарвин', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636716514836500/literature.jpg?width=1208&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
    { key: '12', id: '12', userName: 'Галилео Галилей', lastMessage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', courseAvatar: "https://media.discordapp.net/attachments/616924730875707393/783636732419112970/math.jpg?width=1342&height=755", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
  ]

  @observable userGroups = [
    { label: '11А' },
    { label: 'Университет ИТМО' },

  ]



  @action chipperClick = (key) => {
    for (let i = 0; i < this.chipsList.length; i++) {
      this.chipsList[i].clicked = false
      // console.log(this.chipsList[i].clicked)
    }
    this.chipsList[key].clicked = true
    // console.log(this.chipsList[key].clicked)
    // console.log(this.chipsList)
    // for (let i = 0; i < this.chipsList.length; i++) {
    //   console.log(this.chipsList[i].clicked)
    // }
  }

  @observable chipsList = [
    { key: 0, title: "Все", clicked: true },
    { key: 1, title: "Ваши курсы", clicked: false },
    { key: 2, title: "Избранное", clicked: false },
    { key: 3, title: "Популярное", clicked: false },
    { key: 4, title: "Рекомендации", clicked: false },
    { key: 5, title: "Школьные курсы", clicked: false },
    { key: 6, title: "ЕГЭ", clicked: false },
    { key: 7, title: "Кружок", clicked: false },
  ]
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
