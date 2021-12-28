const faviconsContext = require.context(
    '../',
    true,
    /\.(svg|png|ico|xml|json|webmanifest)$/,
);
faviconsContext.keys().forEach(faviconsContext);
