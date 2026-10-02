const button = document.getElementById('name-pronunciation');
if (button && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
  button.hidden = false;
  document.getElementById('pronunciation-fallback').hidden = true;
  button.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance('Hee yah');
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  });
}
