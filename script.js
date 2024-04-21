window.onload = function() {
    // Lấy kích thước của hình ảnh và container
    var image = document.querySelector('.image-container img');
    var container = document.querySelector('.image-container');
    
    // Tính tỉ lệ thu nhỏ
    var scale = Math.min(container.clientWidth / image.naturalWidth, container.clientHeight / image.naturalHeight);
    
    // Áp dụng tỉ lệ thu nhỏ
    image.style.width = image.naturalWidth * scale + 'px';
    image.style.height = image.naturalHeight * scale + 'px';
};
