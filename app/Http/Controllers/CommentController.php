<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        return view('comments.index');
    }

    public function store(Request $request)
    {
        $comment = new Comment();
        $comment->content = $request->content;
        $comment->save();

        return response()->json($comment);
    }
}
