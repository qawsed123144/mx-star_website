'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/form';
import { useToast } from '@/hooks/use-toast';
import { insertContactSchema, type InsertContact } from '@/lib/schema';
import { apiRequest } from '@/lib/queryClient';
import { z } from 'zod';

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(1, '請輸入姓名'),
  contact: z.string().min(1, '請輸入聯絡方式'),
  topic: z.string().min(1, '請選擇諮詢主題')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      contact: '',
      company: '',
      topic: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "提交成功！",
        description: "感謝您的諮詢，我們將盡快與您聯繫。",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "提交失敗",
        description: error.message || "請稍後再試或直接聯繫我們。",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const handleRequestPresentation = () => {
    toast({
      title: "簡報請求已記錄！",
      description: "我們將透過 Email 發送公司簡報資料給您。",
    });
  };

  return (
    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20">
      <h3 className="text-2xl font-semibold mb-6 text-[var(--gold)]">預約諮詢</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">姓名 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="請輸入您的姓名" 
                      className="bg-[var(--warm-gray)]/50 border-[var(--gold)]/30 focus:border-[var(--gold)] text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">聯絡方式 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="電話或 Email" 
                      className="bg-[var(--warm-gray)]/50 border-[var(--gold)]/30 focus:border-[var(--gold)] text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">公司名稱</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="請輸入公司名稱" 
                    className="bg-[var(--warm-gray)]/50 border-[var(--gold)]/30 focus:border-[var(--gold)] text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">預約主題 *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-[var(--warm-gray)]/50 border-[var(--gold)]/30 focus:border-[var(--gold)] text-white">
                      <SelectValue placeholder="請選擇諮詢主題" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[var(--warm-gray)] border-[var(--gold)]/30">
                    <SelectItem value="data-platform">物聯網數據平台</SelectItem>
                    <SelectItem value="big-data">大數據架構規劃</SelectItem>
                    <SelectItem value="it-consulting">IT 技術顧問</SelectItem>
                    <SelectItem value="digital-transformation">數位轉型</SelectItem>
                    <SelectItem value="other">其他</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">備註</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="請描述您的需求或問題..." 
                    className="bg-[var(--warm-gray)]/50 border-[var(--gold)]/30 focus:border-[var(--gold)] text-white resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--deep-black)] hover:shadow-lg hover:shadow-[var(--gold)]/50 transition-all duration-300"
              disabled={contactMutation.isPending}
            >
              {contactMutation.isPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--deep-black)] mr-2"></div>
                  提交中...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  預約顧問
                </>
              )}
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              className="flex-1 border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-all duration-300"
              onClick={handleRequestPresentation}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              索取簡報
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
