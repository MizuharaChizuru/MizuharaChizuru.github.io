const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '花火が瞬く夜に',
            artist: '羽肿',
            lrc: '/music/lrc/花火が瞬く夜に - 羽肿.lrc',
            cover: '连接',
            url: 'http://audio.xmcdn.com/group39/M02/9E/27/wKgJn1p8V9OQYTecACESMlKTFsw671.mp3/花火が瞬く夜に - 羽肿.mp3'
                  },
        {
            name: '暂无',
            artist: '羽肿',
            lrc: '/music/lrc/花火が瞬く夜に - 羽肿.lrc',
            cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
            url: 'http://audio.xmcdn.com/group39/M02/9E/27/wKgJn1p8V9OQYTecACESMlKTFsw671.mp3/花火が瞬く夜に - 羽肿.mp3'
                  }
        ]
});
