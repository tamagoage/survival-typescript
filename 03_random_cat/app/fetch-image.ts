// APIから画像を取得する関数
export async function fetchImage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await response.json();
    console.log("画像情報を取得しました", images);
    return images[0];
}