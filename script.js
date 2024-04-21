window.onload = function() {
    // Lấy kích thước của hình ảnh và container
    var image = document.querySelector('.image-container img');
    var container = document.querySelector('.image-container');
    
    // Tính tỉ lệ thu nhỏ
    var scale = Math.min(container.clientWidth / image.naturalWidth, container.clientHeight / image.naturalHeight);
    
    // Áp dụng tỉ lệ thu nhỏ
    image.style.width = image.naturalWidth * scale + 'px';
    image.style.height = image.naturalHeight * scale + 'px';

    // Lấy đối tượng audio
    // Lấy đối tượng audio
    var backgroundMusic = document.getElementById('background-music');
    
    // Bắt sự kiện click hoặc touch để bắt đầu phát nhạc
    document.addEventListener('click', playBackgroundMusic);
    document.addEventListener('touchstart', playBackgroundMusic);
    
    function playBackgroundMusic() {
        // Loại bỏ các event listener sau khi đã phát nhạc
        document.removeEventListener('click', playBackgroundMusic);
        document.removeEventListener('touchstart', playBackgroundMusic);
        
        // Bắt đầu phát nhạc nền
        backgroundMusic.play();
    }
};

