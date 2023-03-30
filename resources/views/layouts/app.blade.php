<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @include('fixed.metas')
        @include('fixed.css')
        @yield('local_css')
        <script data-ad-client="ca-pub-3422507932031347" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </head>
    <body id="@yield('body_id')">
        <div id="app">
        @include('fixed.header')
        <main>
            @yield('content')
        </main>
        @include('fixed.footer')
        </div>
        @include('fixed.js')
        @yield('local_js')
    </body>
</html>
