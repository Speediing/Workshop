# Multi-zone example with multiple unique path prefixes

This example consists of two Next.js applications that are served on the same
domain to look and feel like a single application.

The first application is the "host application". All requests go to this application
first, and then the request is rewritten to proceed to the "child application".

## Getting started

```sh
vc link --scope uncurated-tests --project multi-base-path-multizone-host-app --yes
vc env pull apps/host-app/.env.local
```

and then run both `host-app` and `child-app` simultaneously.

```sh
pnpm host-app
pnpm child-app
```

## `basePath`

Next.js only allows one `basePath` on an application. `basePath` allows Next.js to
automatically prefix all paths with the value to make the paths unique. This is used
in multi-zone applications to carve out the URL space from the host application
paths. However, _all_ paths in an application must have this path as a prefix, which
isn't always true in practice. For example:

- `/`, `/help`, `/contact` are served by the host application.
- `/docs`, `/guides`, `/blog` are served by the child application.

The paths for the child application don't share a common path prefix.

To work around this, you can use Next.js rewrites to hide the `basePath`.

```
  async rewrites() {
    return [
      {
        source: '/child-app/:path*',
        destination: 'http://localhost:3001/child-app/:path*',
      },
      {
        source: '/docs/:path*',
        destination: 'http://localhost:3001/child-app/docs/:path*',
      },
      {
        source: '/guides/:path*',
        destination: 'http://localhost:3001/child-app/guides/:path*',
      },
    ];
  }
```

When the user visits `/guides`, they will never see the `/child-app/guides` path but it
exists behind the scenes to route the request to the correct application.

## Cross document view transitions

Since multi-zone applications are separate Next.js applications, they had a hard nav when you
navigate between pages in the different applications. This may result in extra latency and slower
feel due to having to change documents and load different resources from scratch.

To help, you can use the view transition API with cross document support to have an animation that
makes it look like pages are part of the same application.

This is a new spec. It's only implemented in Chrome right now, behind a flag (intended to launch
in Chrome 127). Gecko has expressed positive interest in the API but Webkit has not given a signal
whether they intend to support this API.

In Chrome, you can opt in to this API by navigating to `chrome://flags` and then turning on
`view-transition-on-navigation`.

See https://github.com/WICG/view-transitions/blob/main/explainer.md#cross-document-same-origin-transitions
for more details.
