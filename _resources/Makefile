CONTENT_FILE=02-study-contract.md
OUTPUT_FILE=$(CONTENT_FILE:.md=.pdf)
TEMPLATE_FILE=pandoc-template.tex

all: $(OUTPUT_FILE)

%.pdf: %.md $(TEMPLATE_FILE)
	pandoc $< --template $(TEMPLATE_FILE) -o $@

.PHONY: clean
clean:
	rm $(OUTPUT_FILE)
