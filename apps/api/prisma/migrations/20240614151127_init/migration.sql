-- CreateEnum
CREATE TYPE "AuthProviderType" AS ENUM ('GOOGLE', 'CREDENTIALS');

-- CreateTable
CREATE TABLE "user" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "picture" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "user_admin" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_admin_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "user_credential" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "user_credential_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "user_auth_provider" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "provider_id" TEXT,
    "type" "AuthProviderType" NOT NULL,

    CONSTRAINT "user_auth_provider_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_credential_email_key" ON "user_credential"("email");

-- AddForeignKey
ALTER TABLE "user_admin" ADD CONSTRAINT "user_admin_uid_fkey" FOREIGN KEY ("uid") REFERENCES "user"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_credential" ADD CONSTRAINT "user_credential_uid_fkey" FOREIGN KEY ("uid") REFERENCES "user"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_auth_provider" ADD CONSTRAINT "user_auth_provider_uid_fkey" FOREIGN KEY ("uid") REFERENCES "user"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
