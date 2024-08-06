import { BasketList } from '@/components/BasketList/BasketList';
import { PageTitle } from '@/components/PageTitle/PageTitle';
export default function Page() {
  return (
    <>
      <PageTitle>Your Cart</PageTitle>
      <BasketList />
    </>
  );
}
