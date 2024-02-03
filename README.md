# Framecss adalah Framework CSS Indonesia 
[![Socket Badge](https://socket.dev/api/badge/npm/package/getframecss)](https://socket.dev/npm/package/getframecss)
#### Framecss Sebuah Proyek Kerjasama 
Framecss adalah sebuah proyek open source yang menyediakan berbagai macam library CSS untuk keperluan desain aplikasi web dan website. Framecss awalnya diciptakan oleh Nelsen Niko yang kemudian dikembangkan oleh banyak kontributor lainnya. Kode sekarang  merupakan hasil kolaborasi dari banyak kontributor yang berpartisipasi dalam pengembangan dan perbaikan kode sumbernya. Framecss juga terinspirasi oleh beberapa CSS framework lain, seperti Bootstrap, Foundation, dan Bulma. Framecss menawarkan fitur-fitur unggulan seperti responsive design, grid system, custom components, dan theme customization. Framecss cocok digunakan untuk membuat web yang modern, elegan, dan mudah digunakan. 
⭐ framecss css framework, let's go build your design with framecss3
## Framecss..?🤗 |
[Dokumentasi](https://lzazyhmf1gqglz0hvjcgzq.on.drv.tw/docs.html) | [Lihat kode CSS](https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/frame.min.css) | [Lihat Kode JS](https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/frame.min.js) |

<p align="">Framecss adalah CSS Framework yang Menyediakan berbagai macam library CSS untuk keperluan Desain Aplikasi Web <i>Responsible</i>. CLASS bisa menggunakan bahasa Indonesia ataupun Inggris. misalnya : class="button" atau class="tombol" dan hasilnya sama. Singkatnya, Framecss mendukung class dua bahasa yaitu bahasa Indonesia dan bahasa Inggris</p>

## Status 🤗
| Nama | Deskripsi |
| --- | --- |
| Update | 15-03-2023 |
| Versi | 1.1.4 |
| Lisensi | MIT |

## Mulai 🤔
### CDN✅
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/frame.css">
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/frame.js" defer="true"></script>
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/slider.js" defer="true"></script>
```
### jQuery.js, D3.js, Chart.js, Typed.js😉
```html
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/jq.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/d3.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/chart.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/typed.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/plot.js" type="text/javascript" charset="utf-8"></script>
```
### Another js🤗
```html
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/ftema.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/cp.js" type="text/javascript" charset="utf-8"></script>
```
### NPM 😍
```txt
npm i getframecss
```
### Github 👇
```txt
git clone https://github.com/nelsenpro/framecss.git
```
### Zip File 👇
[Download Zip](https://github.com/nelsenpro/framecss/archive/refs/heads/main.zip)


### see other source on : 👇
[Gitlab](https://gitlab.com/nelsenpro/frame) | | [NPM](https://www.npmjs.com/package/getframecss) | | 
[Sourceforge](https://sourceforge.net/u/bnelsofc/framecss) | |
[Launchpad](https://code.launchpad.net/~nelsenpro/framecss/+git/frame)

## Starter Template 😉
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/frame.min.css">
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/frame.min.js" defer="true"></script>
    <script src="https://cdn.jsdelivr.net/gh/nelsenpro/framecss/data/slider.js" defer="true"></script>
    <title>Document</title>
</head>
<body>
    <h1 class="red">Welcome</h1>
</body>
</html>
```
## Breakpoints :: Media Queries

### Mobile Phone: class="col"
```css
[class*="col-"] {
    width: 100%;
}
```
### Tablet : class="col-s-1"
```css
@media only screen and (min-width: 600px) {
    /* For tablets: */
    .col-s-1 {
        width: var(--col1);
    }
    .col-s-2 {
        width: var(--col2);
    }
    .col-s-3 {
        width: var(--col3);
    }
    .col-s-4 {
        width: var(--col4);
    }
    .col-s-5 {
        width: var(--col5);
    }
    .col-s-6 {
        width: var(--col6);
    }
    .col-s-7 {
        width: var(--col7);
    }
    .col-s-8 {
        width: var(--col8);
    }
    .col-s-9 {
        width: var(--col9);
    }
    .col-s-10 {
        width: var(--col10);
    }
    .col-s-11 {
        width: var(--col11);
    }
    .col-s-12 {
        width: var(--full);
    }
}
```
### PC : class="col-1"
```css
@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {
        width: var(--col1);
    }
    .col-2 {
        width: var(--col2);
    }
    .col-3 {
        width: var(--col3);
    }
    .col-4 {
        width: var(--col4);
    }
    .col-5 {
        width: var(--col5);
    }
    .col-6 {
        width: var(--col6);
    }
    .col-7 {
        width: var(--col7);
    }
    .col-8 {
        width: var(--col8);
    }
    .col-9 {
        width: var(--col9);
    }
    .col-10 {
        width: var(--col10);
    }
    .col-11 {
        width: var(--col11);
    }
    .col-12 {
        width: var(--full);
    }
}
```
## Creator 🥰

[Nelsen Niko](https://wa.me/6285328736706)

## Thanks for : 👍🙏🤝

[Normalize.css] | [Animate.css] | [Fontsawesome] | [StaticSave] | [W3schools] | [Swiffy Slider] | [jQuery.js] | [D3.js] | [Chart.js] | [Plotly.js] |
