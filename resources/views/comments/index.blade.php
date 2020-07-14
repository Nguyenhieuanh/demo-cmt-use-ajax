@extends('home')

@section('content')
<div class="form-group mt-5">
    <label for="comment">Comment</label>
    <textarea name="comment" id="comment" rows="5" class="form-control"></textarea>
    <button class="btn btn-primary" id="btn-cmt">Post</button>
</div>
<div id="comment-field">
    {{-- khu vuc hien thi cmt sau moi lan cmt --}}

</div>
@endsection
