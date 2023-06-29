<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>EPCST</title>
    @vite('resources/css/app.css')
</head>
<body class="scroll-smooth">
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

{{-- Company Logo --}}
    <a href="." class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-3xl text-green-500">EPCST</span>
    </a>

{{-- Nav Links --}}
    <nav class="space-x-4 md:ml-auto flex flex-wrap items-center text-base justify-center">
      <button class="btnCourses hover:text-green-500">Courses</button>
      <button class="btnNews-and-Blogs hover:text-green-500">News and Blogs</button>
      <button class="btnContactUs hover:text-green-500">Contact Us</button>
      <button class="btnDownloadApp inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">Download</button>
    </nav>

  </div>
</header>