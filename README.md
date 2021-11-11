# Google Apps Script to Unassign Licenses from Expired Users

Google Workspace では，2021年時点では，[ある組織部門に属するユーザに対してライセンスを自動割当](https://support.google.com/a/answer/6342682)する方法は提供されているのですが，逆に，ある組織部門に属するユーザからはライセンス割当を解除する方法は提供されていません．このスクリプトは，このライセンス割当解除を自動化します．

## Usage

(1) ドメイン全体の管理者として [Apps Script](https://script.google.com) にアクセス．新しいプロジェクトを用意して，code.js を配置．

(2) サービスとして，以下の2つを有効化．

 * Admin SDK API service
 * Enterprise License Manager API service settings

(3) unassignLicensesForExpiredUsers() を定期的に実行するよう[トリガーを設定する](https://developers.google.com/apps-script/guides/triggers/installable)．

## License

GPL3.
