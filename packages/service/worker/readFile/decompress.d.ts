// @xhmikosr/decompress is an API-compatible, maintained fork of `decompress` (fixes Zip Slip / path traversal).
// It ships no type declarations, so reuse the ones from @types/decompress.
declare module '@xhmikosr/decompress' {
  import decompress from 'decompress';
  export default decompress;
}
