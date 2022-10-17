create table channels
(
    id           TEXT UNIQUE,
    user_id      TEXT not null UNIQUE,
    secret       TEXT not null,
    playback_url TEXT not null,
    stream_url   TEXT not null,
    constraint channel_pkey primary key (id)
);

