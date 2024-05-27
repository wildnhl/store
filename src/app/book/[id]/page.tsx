import { BookSingle } from '@/components/BookSingle/BookSingle';
export default function Page({ params }: { params: { id: string } }) {
  return <BookSingle id={params.id} />;
}
