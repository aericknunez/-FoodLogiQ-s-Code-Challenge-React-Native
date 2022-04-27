
# Code Challenge

App made with React Native



## Installation

Install my-project with npm

```bash
  git clone https://github.com/aericknunez/-FoodLogiQ-s-Code-Challenge-React-Native.git
  cd -FoodLogiQ-s-Code-Challenge-React-Native

  yarn Install
```
    
## Deployment

To deploy this project run

```bash
  yarn start


Enjoy!
```


## API Reference

#### Get all items

```http
  GET https://kitsu.io/api/edge/anime/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://kitsu.io/api/edge/anime/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get Chapters

```http
  GET https://kitsu.io/api/edge/chapters/${id}/anime
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Installed libraries

 - [Tailwind React Native](https://github.com/vadimdemedes/tailwind-rn)
 - [Material Design for React Native.](https://callstack.github.io/react-native-paper/)
 - [MobX-State-Tree](https://mobx-state-tree.js.org/intro/welcome)
 - [Expo for React Native](https://expo.dev/)
 - [Async Storage](https://github.com/react-native-async-storage/async-storage)
 - [TypeScript](TypeScript)

