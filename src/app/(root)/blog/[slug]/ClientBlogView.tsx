// app/blog/[slug]/ClientBlogView.tsx

"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslation } from "react-i18next";

interface BlogType {
  slug: string;
  title: string;
  content: string;
}

export default function ClientBlogView({ blog }: { blog: BlogType }) {
  const { t } = useTranslation();

  return (
    <div className="mt-28 mb-20 max-w-4xl px-4 mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("nav.home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{blog.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10">
        <h1 className="md:text-5xl text-3xl font-bold md:mb-10 mb-6 max-w-5xl">
          {blog.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content || "" }}></div>
      </div>
    </div>
  );
}
