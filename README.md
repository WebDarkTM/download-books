# download-books
Two simple scripts to download books from a specific website where when you are logged in you have a set of links that take you to pages in a book. We used to download some books for free from a private college platform, if you have an 

## Description

If you have a situation where you have several pages with similar web addresses (with numbers for example for each page of a book or set of images) you can use these two scripts to:

1. Download the set of images to your computer
2. Convert this set of pages to a pdf file

## Instructions

1.  First thing to do: go to the browser and allow it to do multiple downloads without asking where to save, including placing a different folder from 'Downloads' so you don't have any problems with filling the folder

2. Edit the start page, end page, link address for book or book number and image format in the script.js file

3. Open browser -> F12 -> Run the script.js on the console -> This will download all files to the folder you selected in item 1 on instructions

4.	After downloading go to the folder where the images are and install this: ```$ sudo pacman -Syu img2pdf``` or if you prefer use pip: ```$ pip3 install img2pdf``` (You only need to do this 1x, for the first book)

5. Move pdf.py to the folder where the images are located and execute in this folder:
```$ python pdf.py -p [finalPage]``` Enter the number of the last page of the PDF

## Authors

* **Mauricio Taffarel** - [taffarel55](https://github.com/taffarel55)