export function px2vmin(px: number, base = 500, unitPrecision = 5) {
  const minViewport = Math.min(
    window.document.body.clientHeight,
    window.document.body.clientWidth
  );

  const unit = minViewport / 100;

  return (
    Math.floor((px / unit) * Math.pow(10, unitPrecision)) /
    Math.pow(10, unitPrecision)
  );
}
