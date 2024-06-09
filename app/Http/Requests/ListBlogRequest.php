<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ListBlogRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'search'    => ['nullable', 'string'],
            'sort'      => ['nullable', 'string', 'in:asc,desc'],
        ];
    }
}
