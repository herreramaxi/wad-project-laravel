@extends('shared.layout')
@section('content')
<script src="{{ asset('js/products/index.js') }}" defer></script>
<link href="{{ asset('css/products/index.css') }}" rel="stylesheet">

<h1>Menus Admin</h1>

<div class="row">

    <div class="col-md-1">

        <button class="btn btn-success" data-toggle="modal" id="createModalButton"
            data-attr="{{ route('products.create') }}">Create</button>
    </div>
    <div class="col-md-9"></div>
    <div class="col-md-2">
        <input class="form-control" id="searchInput" name="name" type="search" placeholder="Search...">
    </div>
</div>
<br />

<div id="response"></div>

<!-- edit modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="editModalBody">
            </div>
            <div class="modal-footer">
                <button type="submit" form="editModalForm" class="btn btn-primary">Update</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- create modal -->
<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Create</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="createModalBody">
            </div>
            <div class="modal-footer">
                <button type="submit" form="createModalForm" class="btn btn-primary">Create</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>
@stop