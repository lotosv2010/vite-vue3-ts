import { onMounted } from 'vue';
import { getEnv } from '@/utils';

export default function useTitle(title?: string): void {
  onMounted(() => {
    const { VITE_APP_TITLE } = getEnv();
    document.title = title ?? VITE_APP_TITLE ?? 'Vite Project';
  });
}
