
import { CarouselItem } from "@/types/api";

/**
 * Sample carousel data payload matching the current implementation
 * Each item represents a slide in the carousel
 */
export const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "ہمارا64",
    tagline: "آئیے اپنے گاؤں کو جنت بنائیں",
    image_url: "https://i.pinimg.com/736x/f2/1b/5a/f21b5a673c08176ce955f61ab1b962bd.jpg",
    order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "ایک ساتھ تعمیر کریں",
    tagline: "بہتر مستقبل بنانے میں ہمارے ساتھ شامل ہوں",
    image_url: "https://i.pinimg.com/736x/02/97/08/029708f69b207abce677c54ba19e48b9.jpg",
    order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    title: "تعلیم کو بااختیار بنانا",
    tagline: "ہماری آنے والی نسلوں کو سہارا دیں",
    image_url: "https://i.pinimg.com/736x/43/76/e4/4376e4508b4022a804bd4c92a1dcb74b.jpg",
    order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    title: "روایات اور ثقافت",
    tagline: "ہماری روایات کو زندہ رکھنے میں مدد کریں",
    image_url: "https://i.pinimg.com/736x/ed/67/3f/ed673fefd644bdfc9ef3d3d8a9c0b5ea.jpg",
    order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 5,
    title: "ترقی کی راہ",
    tagline: "ہماری کمیونٹی کی ترقی میں حصہ ڈالیں",
    image_url: "https://i.pinimg.com/736x/8c/f5/12/8cf512bfe0560b9fa2ce7416da226085.jpg",
    order: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 6,
    title: "زراعت کی اہمیت",
    tagline: "ہماری فصلوں کی کامیابی میں حصہ لیں",
    image_url: "https://i.pinimg.com/736x/8e/51/6d/8e516da1233cfa12ac1ba0e8f091fa78.jpg",
    order: 6,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 7,
    title: "مستقبل کی تعمیر",
    tagline: "آنے والی نسلوں کے لیے بہتر دنیا بنائیں",
    image_url: "https://i.pinimg.com/736x/7a/25/d7/7a25d74c354198350ba0ced8b8861d58.jpg",
    order: 7,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

/**
 * JSON payload format for API consumption
 */
export const carouselJsonPayload = JSON.stringify(carouselData, null, 2);

