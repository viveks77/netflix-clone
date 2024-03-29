export declare module API {
    type ImageSize = 'w500' | 'original';

    interface Page<T> {
        page: number;
        total_pages: number;
        total_results: number;
        results: T[];
    }

    interface Show {
        id: number;
        name: string;
        original_title: string;
        poster_path: string | undefined;
        backdrop_path: string | undefined;
        overview: string;
        genre_ids: number[];
        first_air_date: string;
        origin_country: string[];
        original_language: string;
        vote_count: number;
        vote_average: number;
        popularity: number;
        success?: boolean;
        media_type: string;
        release_date: string;
    }

    interface ShowDetails extends Show {
        homepage: string | null;
        production_companies: ProductionCompany[];
        status: string;
        tagline: string | null;
        genres: Genre[];
        seasons?: Season[];
        videos?: VideoResults;
        imdb_id?: string;
    }

    interface Genre {
        id: number;
        name: string;
    }

    interface GenreList {
        genres: Genre[];
    }

    interface ProductionCompany {
        name: string;
        id: number;
        logo_path: string | null;
        origin_country: string;
    }

    interface Season {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path?: string;
        season_number: number;
    }

    interface SeasonDetails extends Season {
        episodes: Episode[];
    }

    interface Episode {
        id: number;
        name: string;
        overview: string;
        episode_number: number;
        season_number: number;
        air_date: string;
        still_path: string;
        vote_count: number;
        vote_average: number;
    }

    interface VideoResults {
        results: Video[];
    }

    interface Video {
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
        thumbnail_url: string;
        url: string;
    }

    interface Credit {
        id: string;
        cast: Cast[];
    }

    interface Cast {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path?: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
    }
}
