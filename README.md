
# 2D Планировщик интерьера

Простое приложение, для расстановки предметов по условному ресторанному залу.
Учился реализации DnD, импорту/экспорту файлов, работе с redux/toolkit.


## Features

- Добавление на "поле" различных предметов интерьера
- Возможность перетаскивания их по "полю" курсором
- Возможность детально редактировать положение выбранного предмета по X и Y, а так же его угол поворота 
- Удаление выбранного предмета или полная очистка "поля"
- Все предметы и их положения сохраняются в localstorage и не "слетают" при обновлении страницы
- Возможность экспорта и импорта JSON файла с координатами всех добавленных предметов


## Tech Stack

![Static Badge](https://img.shields.io/badge/HTML5-gray?style=for-the-badge&logo=HTML5)
![Static Badge](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=CSS3&logoColor=%23fff&color=%23254BDD)
![Static Badge](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript&logoColor=%23EFD81D&color=%23000)
![Static Badge](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)


## Demo

Ссылка на рабочий сайт: https://second.red-hand.ru


## Deployment

1) Скачать архив с ветки Main
2) Разархивировать в любую папку
3) С помощью терминала git перейти в эту папку

4) Установить зависимости командой
```bash
  npm ci
```
5) Собрать билд командой
```bash
  npm run build
```
6) Запустить билд командой
```bash
  npm run start
```