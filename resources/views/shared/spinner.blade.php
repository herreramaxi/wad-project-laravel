<link href="{{ mix('css/spinner.css') }}" rel="stylesheet">

@section('javascript')
<script src="{{ mix('js/spinner.js') }}" defer></script>
@endsection
<div id="modalSpinner" class="modal fade bd-example-modal-lg" data-backdrop="static" data-keyboard="false"
    tabindex="-1">
    <div class="modal-dialog modal-sm">
        <div class="modal-content" style="width: 48px">
            <span class="fa fa-spinner fa-spin fa-3x"></span>
        </div>
    </div>
</div>