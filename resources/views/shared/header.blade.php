<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            @php
            
            $path = "json/navData.json";
            $json = json_decode(file_get_contents($path), true);
            @endphp

            @isset( $json )

            @foreach ($json['items'] as $item)

            @if( $item['name']!= null &&
            $item['href'] !=null &&
            $item['visible'] !=null &&
            $item['visible'] == 'true' &&
            $item['authenticated'] !=null &&
            $item['authenticated'] == 'false' ||
            env('AUTH_DISABLED', false) ||
            $item['authenticated'] == 'true' && Auth::check())

            <li class="nav-item {{ (request()->is($item['href'])) ? 'active' : '' }}">
                <a class="nav-link" href="/{{$item['href']}}">{{$item['name']}}</a>
            </li>

            @endif

            @endforeach


            @endisset

        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
            @guest          

            @env('local')
            <!-- Authentication Links: only shown on local environment (in PRODUCTION environment this is hidden). -->
            @if (Route::has('login'))
            <li class="nav-item">
                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
            </li>
            @endif

            @if (Route::has('register'))
            <li class="nav-item">
                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
            </li>
            @endif
            @endenv

            @else
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" v-pre>
                    {{ Auth::user()->name }}
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </div>
            </li>
            @endguest
        </ul>

    </div>
</nav>