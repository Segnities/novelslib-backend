import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { readFile } from 'fs/promises';
import * as admin from 'firebase-admin';
let app: admin.app.App = null;

@Injectable()
export class FirebaseAdmin implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    if (!app) {
      const firebaseServiceAccountFile = await readFile(
        './config/yavir_reads-80075-firebase-adminsdk-chbv5-23034ba1df.json',
        'utf8',
      );
      const serviceAccount = await JSON.parse(firebaseServiceAccountFile);
      app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }
  setup() {
    return app;
  }
}
