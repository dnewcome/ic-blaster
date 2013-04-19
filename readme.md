# About 

GIICM is an ASCII-formatted database of integrated circuit (chip) pinout data. 
IC blaster gives you quick command line access to it.

# Installing

Clone the repository, symlink to icb and you should be good. Try 
[zpm](https://github.com/dnewcome/zpm) if you are
feeling adventurous.

# Usage

    $ icb <partnumber>

Note that the full part number must be given. No partial matches are made. 

# Future work

No partial part number matches are made. I didn't need 
this functionality so I didn't put it in there. Realistically all I do is search pinouts for 
some common 74xx series chips so the rest of the pinouts are there just because. If anyone
else ever finds this useful enough to extend it to search descriptions or anything else,
that would be awesome.

# Why?

I got tired of looking up the data sheets for 74xx series logic ICs online.
In the best case google would give me an image from some random web page with
the pinout, and in the worst case I'd have to open up a PDF file, which 
is a pain to do just for the pinout. I discovered that there was an ASCII-based
pinout archive (GIICM) but the original data seems to be lost but for a few
mirrors of some generated HTML. I thought it would be nice to scrape these 
pages and store the data as JSON, which could be queried and printed to
the console using node.js.

# Original GIICM data directory

[http://www.kingswood-consulting.co.uk/giicm/](http://www.kingswood-consulting.co.uk/giicm/)

# Re-generating database

Using icb-index.js will regenerate a json database from the html sources. 

