-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Presave" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "Presave_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artist_email_key" ON "Artist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Presave_slug_key" ON "Presave"("slug");

-- AddForeignKey
ALTER TABLE "Presave" ADD CONSTRAINT "Presave_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
