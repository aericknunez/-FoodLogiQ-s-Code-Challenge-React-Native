
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




## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

