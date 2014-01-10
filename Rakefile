require 'rest-client'

desc 'Convert _mo.scss to _mo.stylus'
task :convert do
  stylus_content = RestClient.post('http://sass2stylus.com/api', {
		  	          'file' => File.new('_mo.scss')
			         })

  File.open('_mo.styl', 'w') { |file| file.write(stylus_content) }
end
