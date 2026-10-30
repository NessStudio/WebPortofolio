import { DETAIL } from "../content/detail";
import { fillSlots } from "../lib/slots";

/** Halaman detail proyek (tampil saat URL berisi #project-1, #project-2, dst). */
export default function Detail() {
  return <div id="detail" dangerouslySetInnerHTML={{ __html: fillSlots(DETAIL.light + DETAIL.dark) }} />;
}
