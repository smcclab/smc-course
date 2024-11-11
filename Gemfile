source "https://rubygems.org"
gem "jekyll", "~> 4.2"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

group :jekyll_plugins do
  gem "jekyll-theme-anu", :git => "git@gitlab.anu.edu.au:jekyll-anu/gems/jekyll-theme-anu.git", :tag => "v2.4.34"
  gem "jekyll-plugins-anu", :git => "git@gitlab.anu.edu.au:jekyll-anu/gems/jekyll-plugins-anu.git",  :tag => "v2.5.0"
  gem "jekyll-revealify-plugin", :git => "git@gitlab.anu.edu.au:jekyll-anu/gems/jekyll-revealify-plugin.git", :ref => '808c4a48'
  gem "jekyll-paginate-v2", :git => "git@gitlab.anu.edu.au:jekyll-anu/gems/jekyll-paginate-v2.git", :branch => "develop"
  gem "jekyll-sitemap"
  ## temporary fix for the old jekyll-autoprefixer-re gem, which is no longer on rubygems.org
  gem "jekyll-autoprefixer-re", :git => "git@gitlab.anu.edu.au:jekyll-anu/gems/jekyll-autoprefixer-re.git", :branch => "master"
end

gem "webrick", "~> 1.7"