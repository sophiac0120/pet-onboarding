#class vs instance methods

class Invoice
  def self.print_out
    "Print out invoice"
  end

  def convert_to_pdf
    "Converted to PDF"
  end
end

i = Invoice.new
p i.convert_to_pdf

p Invoice.print_out
