export interface WebViewMusicPlayPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
