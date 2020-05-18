const images = [
    {
        value: 1,
        src: `https://img3.goodfon.com/wallpaper/nbig/7/74/marya-face-london-beautiful.jpg`,
        text: 'Heading One',
    },
    {
        value: 2,
        src: `https://www.wallpaperup.com/uploads/wallpapers/2013/01/29/31927/9b8840218bb5064b3175880ebdc405c0-700.jpg`,
        text: 'Heading Two',
    },
    {
        value: 3,
        src: `https://pbs.twimg.com/media/DFvOdUiXsAEjhLh.jpg`,
        text: 'Heading Three',
    },
    {
        value: 4,
        src: `https://www.wallpaperup.com/uploads/wallpapers/2016/11/25/1053042/992b9ec77f8d3da330294e71b8fcee02-700.jpg`,
        text: 'Heading Four',
    },
    {
        value: 5,
        src: `https://lh3.googleusercontent.com/proxy/Zb05PRoz_krbftAVmSVCssS6v7i1fesF-HOoGnP94DhJdbQ0BkG504gLJwDwUkjS0EHqGGh76H4zjqqQSveXWPYAH2yvR_5RHETWAqvPkrVCVYR_58kZshUTRhtvGA`,
        text: 'Heading Five',
    },
    {
        value: 6,
        src: `https://wallpaperaccess.com/full/1276113.jpg`,
        text: 'Heading Six',
    },
];

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const img = document.getElementById('img');
const heading = document.querySelector('.heading');
const subheading = document.querySelector('.subheading');

let counter = 0;

nextBtn.addEventListener('click', function () {
    handleBtn('+');
});
prevBtn.addEventListener('click', function () {
    handleBtn('-');
});

function handleBtn(operator) {
    img.animate([{ opacity: '0.1' }, { opacity: '1.0' }], {
        duration: 1000,
        fill: 'forwards',
    });
    console.log(counter);

    if (operator === '+') {
        counter++;
    } else if (operator === '-') {
        counter--;
    }

    if (counter >= images.length) {
        counter = 0;
    } else if (counter <= -1) {
        counter = images.length - 1;
    }

    img.src = images[counter].src;
    heading.textContent = images[counter].text;

    // console.log(img.src);
}
