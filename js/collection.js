function sendToWhatsApp(styleName, imageFile) {
    let phoneNumber = "2348144894467";
    let imageURL = `https://giftycloset.netlify.app/images/${encodeURIComponent(imageFile)}`;
    let message = `Hello, I am interested in ${styleName}. Here is the image link: ${imageURL}`;
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}