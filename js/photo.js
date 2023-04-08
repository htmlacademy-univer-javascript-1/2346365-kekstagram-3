import { generatePhotosArray } from './data.js';

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoList = document.querySelector('.pictures');

function drawPhotos() {
  const photos = generatePhotosArray();
  const documentFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments}) => {
    const photoHolder = photoTemplate.cloneNode(true);
    photoHolder.querySelector('.picture__img').src = url;
    photoHolder.querySelector('.picture__likes').textContent = likes;
    photoHolder.querySelector('.picture__comments').textContent = comments.length;
    documentFragment.appendChild(photoHolder);
  });
  photoList.appendChild(documentFragment);
}

export {
  drawPhotos
};
