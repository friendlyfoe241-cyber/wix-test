import wixWindow from 'wix-window';

const BOX29_SELECTOR = "#box29";
const SIDE_PADDING = 10;

$w.onReady(function () {
    resizeBox29();
    wixWindow.onResize(() => resizeBox29());
});

function resizeBox29() {
    const viewportWidth = wixWindow.windowSize.width;
    const newWidth = Math.max(0, viewportWidth - SIDE_PADDING * 2);

    $w(BOX29_SELECTOR).x = SIDE_PADDING;
    $w(BOX29_SELECTOR).changeSize(newWidth, $w(BOX29_SELECTOR).height);
}