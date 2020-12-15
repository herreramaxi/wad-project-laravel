<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            @php
            $path = "navData.json";
            $json = json_decode(file_get_contents($path), true);
            @endphp

            @isset( $json )

            @foreach ($json['items'] as $item)

            @if( $item['name']!= null && $item['href'] !=null )
            <li class="nav-item {{ (request()->is($item['href'])) ? 'active' : '' }}">
                <a class="nav-link" href="/{{$item['href']}}">{{$item['name']}}</a>
            </li>
            @endif

            @endforeach


            @endisset

        </ul>
    </div>
</nav>