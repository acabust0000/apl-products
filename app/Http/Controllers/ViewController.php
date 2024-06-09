<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListGalleriesRequest;
use App\Http\Requests\ListBlogRequest;
use App\Http\Resources\ArticleCollection;
use App\Http\Resources\GalleryCollection;
use App\Models\Article;
use App\Models\Faq;
use App\Models\Gallery;
use Illuminate\Database\Eloquent\Builder;

class ViewController extends Controller
{
    public function index () {
        $ref    = 'https://ro.aplgo.com/884621/acumullitsa/';
        $props  = [
            'products' => [
                'gts'       => [
                    'span'          => strtoupper('gts'),
                    'title'         => "Get Strength",
                    'description'   => "Începeţi să stimulaţi energia naturală a corpului, vitalitatea şi rezistenţa lui. GTS oferă beneficii corpului prin activarea vitalităţii şi rezistenţei sale naturale.",
                    'url'           => "{$ref}gts/",
                    'img'           => asset('products/gts.webp'),
                ],
                'grw'       => [
                    'span'          => strtoupper('grw'),
                    'title'         => "Grow",
                    'description'   => "GRW este un amestec puternic de nutrienţi care ajută organismului să îşi păstreze starea de alertă naturală, răspunsul imun şi vitalitatea.",
                    'url'           => "{$ref}grw/",
                    'img'           => asset('products/grw.webp'),
                ],
                'nrm'       => [
                    'span'          => strtoupper('nrm'),
                    'title'         => 'Normal',
                    'description'   => 'NRM ajută organismului să menţină metabolismul natural de glucoză în diapazonul normal. Obţineţi nutrienţii de care are nevoie organismul dumneavoastră pentru îndeplinirea activităţilor cotidiene.',
                    'url'           => "{$ref}nrm/",
                    'img'           => asset('products/nrm.webp'),
                ],
                'pwr-man'   => [
                    'span'          => strtoupper('pwr lemon'),
                    'title'         => 'Power Man',
                    'description'   => 'PWR LEMON este un amestec învigorator şi puternic de nutrienţi integrali botanici care susţine modul de viaţă deja activ al unui bărbat.',
                    'url'           => "{$ref}pwr-man/",
                    'img'           => asset('products/pwr-man.webp'),
                ],
                'pwr-woman' => [
                    'span'          => strtoupper('pwr apricot'),
                    'title'         => 'Power Woman',
                    'description'   => 'PWR Apricot este o combinaţie puternică de nutrienţi botanici care ajută la învigorarea sănătăţii nutriţionale deja normale a femeii.',
                    'url'           => "{$ref}pwr-woman/",
                    'img'           => asset('products/pwr-woman.webp'),
                ],
                'rlx'       => [
                    'span'          => strtoupper('rlx'),
                    'title'         => 'Relax',
                    'description'   => 'RLX reprezintă o infuzie formulată special pentru a majora abilitatea organismului dumneavoastră de a se relaxa şi de a se calma mintal.',
                    'url'           => "{$ref}rlx/",
                    'img'           => asset('products/rlx.webp'),
                ],
                'sld'       => [
                    'span'          => strtoupper('sld'),
                    'title'         => 'Slide',
                    'description'   => 'SLD menţine confortul corpului şi uşurinţa mişcărilor. Contribuie la însănătoşirea organismului şi recuperarea după suprasolicitări fizice şi activitate cotidiană.',
                    'url'           => "{$ref}sld/",
                    'img'           => asset('products/sld.webp'),
                ],
                'stp'       => [
                    'span'          => strtoupper('stp'),
                    'title'         => 'Stop',
                    'description'   => 'STP este un amestec de nutrienţi integrali botanici care stimulează răspunsul sănătos al organismului la disconfort fizic şi procesele de regenerare.',
                    'url'           => "{$ref}stp/",
                    'img'           => asset('products/stp.webp'),
                ],
                'alt'       => [
                    'span'          => strtoupper('alt'),
                    'title'         => 'Alternative',
                    'description'   => 'ALT ajută la menţinerea respiraţiei deja normalizate şi susţine mijloacele naturale de protecţie ale corpului uman împotriva factorilor negativi de mediu şi particulelor de poluanţi conţinute în aer care pot afecta respiraţia normală.',
                    'url'           => "{$ref}alt/",
                    'img'           => asset('products/alt.webp'),
                ],
                'mls'       => [
                    'span'          => strtoupper('mls'),
                    'title'         => 'Multi-Spectrum',
                    'description'   => 'MLS reprezintă un mix de substanţe botanice speciale care ajută la activarea suportului nutriţional de care organismul dumneavoastră are nevoie pentru a menţine microbiomul sănătos şi procesele sănătoase de digestie.',
                    'url'           => "{$ref}mls/",
                    'img'           => asset('products/mls.webp'),
                ],
                'hrt'       => [
                    'span'          => strtoupper('hrt'),
                    'title'         => 'Heart',
                    'description'   => 'HRT ajută la menţinerea proceselor circulatorii şi regulatorii deja normale, cu protecţie asigurată.',
                    'url'           => "{$ref}hrt/",
                    'img'           => asset('products/hrt.webp'),
                ],
                'ice'       => [
                    'span'          => strtoupper('ice'),
                    'title'         => 'Ice',
                    'description'   => 'ICE conţine componente botanice care sunt recunoscute pentru susţinerea capacităţii normale a organismului de a-şi regula digestia şi mobiliza mecanismele imune sănătoase.',
                    'url'           => "{$ref}ice/",
                    'img'           => asset('products/ice.webp'),
                ],
                'hpr'       => [
                    'span'          => strtoupper('hpr'),
                    'title'         => 'Hepar',
                    'description'   => 'HPR reprezintă o compoziţie sinergetică de nutrienţi integri benefici, care sunt tradiţional apreciaţi pentru dezintoxicarea regulată a organismului sănătos.',
                    'url'           => "{$ref}hpr/",
                    'img'           => asset('products/hpr.webp'),
                ],
            ]
        ];

        return inertia('about/index', $props);
    }

    public function contact () {
        $props = [
            'url'   => route('leads.store'),
            'faqs'  => Faq::all(),
        ];

        return inertia('contact/index', $props);
    }

    public function gallery (ListGalleriesRequest $request) 
    {
        $galleries  = Gallery::with('media')
            ->orderBy('date', $request->query('sort', 'desc'))
            ->when(
                $request->filled(['start', 'end']),
                fn (Builder $articles ) => $articles
                    ->whereDate('date', '>=', $request->query('start'))
                    ->whereDate('date', '<=', $request->query('end'))
            )
            ->when(
                $request->filled('search'),
                fn (Builder $articles ) => $articles
                    ->where('title', 'like', "%{$request->query('search')}%")
            )
            ->paginate(20)
            ->withQueryString()
        ;

        $props      = (new GalleryCollection($galleries))->toArray($request);

        return $request->expectsJson() ? 
            response()->json($props) : 
            inertia('gallery/List', $props)
        ;
    }

    public function blog (ListBlogRequest $request) {
        $articles  = Article::with('media')
            ->orderBy('created_at', $request->query('sort', 'desc'))
            ->when(
                $request->filled('search'),
                fn (Builder $articles ) => $articles
                    ->where('title', 'like', "%{$request->query('search')}%")
            )
            ->paginate(20)
            ->withQueryString()
        ;

        $props      = (new ArticleCollection($articles))->toArray($request);

        return $request->expectsJson() ? 
            response()->json($props) : 
            inertia('blog/List', $props)
        ;
    }
    
}
