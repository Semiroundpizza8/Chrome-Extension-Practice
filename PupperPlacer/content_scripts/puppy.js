console.log('Puppy Attack')

let filenames = [
  'mvimg_20171221_181451_1024.jpg',
  'img-20171230-wa0014.jpg',
  'image_uploaded_from_ios_1024-1.jpg',
  '00100dportrait_00100_burst20180101104638275_cover_1024.jpg',
  'image_uploaded_from_ios_1024.jpg',
  '00100dportrait_00100_burst20180112101546935_cover_1024.jpg'
]

let imgs = document.getElementsByTagName('img');

console.log(imgs);

for (let element of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = filenames[r];
  let url = chrome.extension.getURL(file);
  element.src = url;
  console.log(element.src);
}
