import { useContext } from "react";

export const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Текст скопирован');
  } catch (err) {
    console.error('Ошибка:', err);
  }
};